import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ShiftAssignmentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.shiftAssignment?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="workerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Worker id
        </Label>

        <NumberField
          name="workerId"
          defaultValue={props.shiftAssignment?.workerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="workerId" className="rw-field-error" />

        <Label
          name="shiftId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Shift id
        </Label>

        <NumberField
          name="shiftId"
          defaultValue={props.shiftAssignment?.shiftId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="shiftId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ShiftAssignmentForm
