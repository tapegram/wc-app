import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const AddressForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.address?.id)
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
          name="firstLine"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First line
        </Label>

        <TextField
          name="firstLine"
          defaultValue={props.address?.firstLine}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstLine" className="rw-field-error" />

        <Label
          name="secondLine"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Second line
        </Label>

        <TextField
          name="secondLine"
          defaultValue={props.address?.secondLine}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="secondLine" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>

        <TextField
          name="city"
          defaultValue={props.address?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="city" className="rw-field-error" />

        <Label
          name="state"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          State
        </Label>

        <TextField
          name="state"
          defaultValue={props.address?.state}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="state" className="rw-field-error" />

        <Label
          name="postal"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Postal
        </Label>

        <TextField
          name="postal"
          defaultValue={props.address?.postal}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="postal" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AddressForm
