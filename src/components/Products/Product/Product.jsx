import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

function Product({ product, onAddToCart }) {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            className={classes.description}
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <Typography variant="h5" className={classes.price}>
            {product.price.formatted_with_code}
          </Typography>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Product
