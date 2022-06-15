import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const WorkerForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.worker?.id)
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
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.worker?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>

        <TextField
          name="lastName"
          defaultValue={props.worker?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>

        <TextField
          name="phone"
          defaultValue={props.worker?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.worker?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="addressId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address id
        </Label>

        <NumberField
          name="addressId"
          defaultValue={props.worker?.addressId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="addressId" className="rw-field-error" />

        <Label
          name="jobType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Job type
        </Label>

        <TextField
          name="jobType"
          defaultValue={props.worker?.jobType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="jobType" className="rw-field-error" />

        <Label
          name="employmentStatus"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Employment status
        </Label>

        <TextField
          name="employmentStatus"
          defaultValue={props.worker?.employmentStatus}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="employmentStatus" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WorkerForm
