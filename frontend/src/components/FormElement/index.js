import React from 'react';
import { form, control, button } from 'react-validation';

const ValidationForm = ({ getValues, validate, validateAll, showError, hideError, children, ...props }) => (
	<form {...props}>{children}</form>
);

const ValidationInput = ({ error, isChanged, isUsed, ...props }) => (
	<div>
		<input {...props} />
		{isChanged && isUsed && error}
	</div>
);

const ValidationButton = ({ hasErrors, ...props }) => {
	return (
		<button {...props} disabled={hasErrors} />
	);
};

const Form = form(ValidationForm);
const Input = control(ValidationInput);
const Button = button(ValidationButton);

export {
	Form,
	Input,
	Button
}