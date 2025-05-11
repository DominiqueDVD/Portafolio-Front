import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../config/services/auth/authService';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  if (!isOpen) return null;

  const validationSchema = Yup.object({
    username: Yup.string().required('El usuario es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
  });

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Iniciar sesión</h2>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, setFieldError }) => {
            try {
              const token = await login(values);
              onLoginSuccess(token);
            } catch (err) {
              setFieldError('password', 'Credenciales incorrectas');
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label>Usuario:</label>
                <Field name="username" type="text" placeholder="Ingrese su usuario" />
                <ErrorMessage name="username" component="div" className="error" />
              </div>
              <div>
                <label>Contraseña:</label>
                <Field name="password" type="password" placeholder="Ingrese su contraseña" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Iniciando...' : 'Iniciar sesión'}
                </button>
                <button type="button" onClick={onClose}>Cerrar</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginModal;
