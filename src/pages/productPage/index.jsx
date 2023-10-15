import React, { useEffect, useState } from 'react'
import { PRODUCTS_API } from '../../constants/config'
import { API } from '../../utils/utility/API-call'
import { Button, Chip, Divider, IconButton, InputAdornment, TextField } from '@mui/material'
import { handleError, handleSuccess } from '../../utils/utility/snackbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import './index.css'

function ProductPage() {
  const [product, setProduct] = useState(null)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => getProducts(), [])

  const getProducts = () => {
    API().get(PRODUCTS_API).then(res => {
      handleSuccess(res)
      if (res.status === 200 && res.data.data?.length) {
       const product = res.data.data[0]
        setProduct(product)
        setSelectedColor(product.images[0].color)
        setSelectedSize(product.sizes[0].size)
        setSelectedPrice(product.sizes[0].price)
      }
    }).catch(err => handleError(err))
  }

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      (prevIndex + 1) % product.images.length
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar-left'>
          <div className='logo'>
            Logo
          </div>
          <span className='navbar-store-name'>ACME STORE</span>
          <span className='navbar-tabs-title'>All</span>
          <span className='navbar-tabs-title'>Shirts</span>
          <span className='navbar-tabs-title'>Stickers</span>
          <TextField
            size="small"
            variant="outlined"
            placeholder='Search for products...'
            InputProps={{
              sx: { borderRadius: 3 },
              endAdornment: (
                <InputAdornment
                  position="end"
                >
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </div>
        <div>
          <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
      <div className='main-body'>
        {product && <> <div className='product-image'>
          <div className='image-preview-container'>
            <img
              src={product.images.find(color => color.color === selectedColor).url[[selectedImageIndex]]}
              alt={`Preview ${selectedImageIndex}`}
              className='image-preview'
            />
            <div className='image-preview-icons'>
              <IconButton disabled={!selectedImageIndex}><ArrowBackIcon
                sx={{ cursor: 'pointer' }}
                onClick={handlePrevImage}
              /></IconButton>
              <IconButton disabled={selectedImageIndex === (product.images.find(color => color.color === selectedColor).url.length - 1)}>
                <ArrowForwardIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={handleNextImage}
                /></IconButton>
            </div>
          </div>
        </div>
          <div className='product-details'>
            <div className='heading'>
              <h1>{product.title}</h1>
              <Chip label={`₹${selectedPrice}`} color="primary" />
            </div>
            <Divider />
            <p className='label'>COLOR</p>
            {product.images.map(image => {
              return <Chip className='capitalize' sx={{ marginX: 1 }} color={selectedColor === image.color ? 'primary' : 'default'} label={image.color}
                onClick={() => {
                  setSelectedColor(image.color);
                  setSelectedImageIndex(0); // Reset image index
                }} />
            })}
            <p className='label'>SIZE</p>
            {product.sizes.map(size => {
              return <Chip className='capitalize' sx={{ marginX: 1 }} color={selectedSize === size.size ? 'primary' : 'default'} label={size.size} onClick={() => {
                setSelectedSize(size.size)
                setSelectedPrice(size.price)
              }} />
            })}
            <Divider sx={{
              marginY: 3
            }} />
            <Button variant='contained'>Add To Cart</Button>
            <p>{product.description}</p>
          </div></>}
      </div>
    </div>
  )
}

export default ProductPage