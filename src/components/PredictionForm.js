import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PredictionFom = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>Description</label>
        <div>
          <Field
            name="description"
            component="input"
            type="text"
            placeholder="Description"
          />
        </div>
      </div>
      <div>
        <label>Date</label>
        <div>
          <Field
            name="date"
            component="input"
            type="date"
            placeholder="Date"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button disabled={pristine || submitting} onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'prediction' // a unique identifier for this form
})(PredictionFom)