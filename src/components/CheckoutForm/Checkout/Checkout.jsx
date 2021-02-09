import React, { useState, useEffect } from 'react'
import {
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
} from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { commerce } from '../../../lib/commerce'
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

const steps = ['Shipping address', 'Payment details']

function Checkout({ cart, order, onCaptureCheckout, error }) {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [isFinished, setIsFinished] = useState(false)
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        })

        setCheckoutToken(token)
      } catch (error) {
        history.push('/')
      }
    }

    generateToken()
  }, [cart])

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        backStep={backStep}
        nextStep={nextStep}
        shippingData={shippingData}
        onCaptureCheckout={onCaptureCheckout}
        timeout={timeout}
      />
    )

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true)
    }, 3000)
  }
  const Confirmation = () =>
    order.customer ? (
      <>
        <div className={classes.successForm}>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}{' '}
            {order.customer.lastname}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
          <br />
          <Button component={Link} to="/" variant="outlined" type="button">
            Back to Home
          </Button>
        </div>
      </>
    ) : isFinished ? (
      <>
        <div className={classes.successForm}>
          <Typography variant="h5">Thank you for your purchase</Typography>
          <Divider className={classes.divider} />
          <br />
          <Button component={Link} to="/" variant="outlined" type="button">
            Back to Home
          </Button>
        </div>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    )

  if (error) {
    ;<>
      <Typography variant="h5">Error: {error}</Typography>
      <br />
    </>
  }

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const next = (data) => {
    setShippingData(data)

    nextStep()
  }

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  )
}

export default Checkout
