import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  Box,  Stack,  TextField,  Button,  Typography,  Container} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DriverRegistrationForm() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user_id: '',
      firstname: '',
      lastname: '',
      licence_no: '',
      ph_num: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: Yup.object({
      user_id: Yup.string()
          .required('User ID is required')
          .max(45, 'User ID cannot exceed 45 characters'),
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      licence_no: Yup.string().required('Licence number is required'),
      ph_num: Yup.string()
          .matches(/^\d+$/, 'Phone number must be numeric')
          .required('Phone number is required'),
      password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters long'),
      confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm password is required'),
    }),
      onSubmit: async (values, { setErrors }) => {
        try {
          // Mock backend request (replace with your actual API endpoint)
          const response = await axios.post('http://localhost:8080/api/Driver/DriverRegistration', {
            'user_id': values.user_id,
            'firstname': values.firstname,
            'lastname': values.lastname,
            'licence_no': values.licence_no,
            'ph_num': values.ph_num,   
            'password': values.confirmPassword,
          });
           
          if(response.data === "user saved successfully"){
            navigate('/SigupSuccessfull');
          }else if(response.data === "An account with this email already exists."){
            setErrors({ user_id: response.data});
          }else if(response.data === "Invalid email"){
            setErrors({ user_id: response.data});
          }else if(response.data === "Invalid password"){
            setErrors({ password: response.data});
            setErrors({ confirmPassword: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special symbol (e.g., !, @, #, $, etc.)."});
          }
        } catch (error) {
          if (error.response && error.response.data) {
            const backendErrors = error.response.data;

            // Set backend errors dynamically using setErrors
            const formattedErrors = {};
            Object.keys(backendErrors).forEach((field) => {
              formattedErrors[field] = backendErrors[field];
            });
            setErrors(formattedErrors); // Set all errors at once
          } else {
            alert('Something went wrong. Please try again.' );
          }
        }
      },
    });

  return (
    <div>
        <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Driver Registration Form
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              variant="outlined"
              id="user_id"
              name="user_id"
              label="User ID"
              value={formik.values.user_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.user_id && Boolean(formik.errors.user_id)}
              helperText={formik.touched.user_id && formik.errors.user_id}
            />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                variant="outlined"
                id="firstname"
                name="firstname"
                label="First Name"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                helperText={formik.touched.firstname && formik.errors.firstname}
              />
              <TextField
                fullWidth
                variant="outlined"
                id="lastname"
                name="lastname"
                label="Last Name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </Stack>
            <TextField
              fullWidth
              variant="outlined"
              id="licence_no"
              name="licence_no"
              label="Licence No"
              value={formik.values.licence_no}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.licence_no && Boolean(formik.errors.licence_no)}
              helperText={formik.touched.licence_no && formik.errors.licence_no}
            />
            <TextField
              fullWidth
              variant="outlined"
              id="ph_num"
              name="ph_num"
              label="Phone Number"
              value={formik.values.ph_num}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.ph_num && Boolean(formik.errors.ph_num)}
              helperText={formik.touched.ph_num && formik.errors.ph_num}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              id="password"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword
              }
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
    </div>
  )
}
