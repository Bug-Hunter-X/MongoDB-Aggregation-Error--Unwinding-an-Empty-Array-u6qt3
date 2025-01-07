```javascript
db.users.aggregate([
  {
    $lookup:
      {
        from: 'products',
        localField: 'productId',
        foreignField: '_id',
        as: 'purchasedProducts'
      }
  },
  {
    $unwind: {
      path: '$purchasedProducts',
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $group:
      {
        _id: '$userId',
        totalSpent: {
          $sum: {
            $ifNull: [ '$purchasedProducts.price', 0 ]
          }
        }
      }
  }
])
```