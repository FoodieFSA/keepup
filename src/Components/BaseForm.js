import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { isClear, HandleError } from './index'
import { Formik } from 'formik'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '10px',
    fontWeight: 'bolder',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#282c34',
    border: '2px solid #000',
    padding: '20px',
    outline: 'none',
  },
}));

export default (props) => {
  
  const [state, setState] = useState({})
  const classes = useStyles()

  // TODO finish up the handlesubmit
  const handleSubmit = (useValue, formActions) => {
    const finalRedirect = (id) => {
      if (typeof props.finalCommand === 'function') {
        props.finalCommand(id);
      }
    };

    const { dataMode } = useValue;
    if (typeof props.onSubmitTransform === 'function') {
      useValue = props.onSubmitTransform(useValue);
    }

    if (dataMode === 'insert') {
      props.externalApi
        .insertDocument(useValue)
        .then((response) => {
          finalRedirect(response.data.id);
        })
        .catch(HandleError)
        .finally(() => {
          formActions.setSubmitting(false)
        })
    } else if (dataMode === 'update') {
      props.externalApi
        .updateDocument(useValue)
        .then((response) => {
          finalRedirect(response.data.id);
        })
        .catch(HandleError)
        .finally(() => {
          formActions.setSubmitting(false)
        })
    }
  };

  const NullToEmpty = (value) => {
    if (_.isNumber(value)) {
      return value.toString();
    }


    return _.isNil(value) ? '' : undefined
  }
  const ModifyInfo = (data) => {
    if (
      !isClear(props.onStartTransform) &&
      typeof props.onStartTransform === 'function'
    ) {
      data = props.onStartTransform(data)
    }
    setState(data)
  }
  const SetInsertMode = (data) => {
    data.precursory = _.cloneDeep(data)
    data.dataMode = 'insert'
    ModifyInfo(data)
  }

  useEffect(() => {
    if (!isClear(props.id) && !isClear(props.externalApi)) {
      props.externalApi
        .retrieveDocument(props.id)
        .then(
          /**
           * @param {string} data.dataMode
           * @param {any} data.precursory
           */
          ({ data }) => {
            // console.log('beforeClone', data)
            data.precursory = _.cloneDeep(data);
            data.dataMode = 'update';
            data = _.cloneDeepWith(data, NullToEmpty);
            // console.log('afterClone', data)
            ModifyInfo(data)
          }
        )
        .catch((error) => {
          setState({ dataMode: 'error' });
          HandleError(error);
        });
    } else {
      const data = props.initialValues
      if (
        !isClear(props.externalApi) &&
        typeof props.externalApi.initializeDocument === 'function'
      ) {
        props.externalApi
          .initializeDocument()
          .then((allResponse) => {
            data.initialized = allResponse.data;
            SetInsertMode(data);
          })
          .catch((error) => {
            setState({ dataMode: 'error' });
            HandleError(error);
          });
      } else {
        SetInsertMode(data);
      }
    }
  }, []);
  if (state.dataMode === 'error') {
    return <p>Error</p>;
  } else if (state.dataMode === 'insert' || state.dataMode === 'update') {
    return (
      <Formik
        initialValues={state}
        validationSchema={props.validationSchema}
        // validate={props.validate}
        validateOnChange={!props.fastValidation}
        validateOnBlur={!props.fastValidation}
        onSubmit={handleSubmit}
      >
        {(formProps) => (
          <form className='form-container' autoComplete='off'>
            {props.children(formProps)}
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              type='submit'
              onClick={formProps.handleSubmit}
            >
              {props.buttonText}
            </Button>
          </form>
        )}
      </Formik>
    );
  } else {
    return <p>loading</p>;
  }
};
