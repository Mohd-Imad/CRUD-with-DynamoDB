const { PutCommand, ScanCommand, GetCommand, DeleteCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb')
const documentClient = require('./dynamodbClient')
const cuid = require('cuid')

const TableName = 'product'

//Add Item 
const addProduct = async (product) => {
    const response = await documentClient.send(
        new PutCommand({
            TableName: TableName,
            Item: {
                product
            }
        })
    )
    console.log(response)
}

/*---addProduct function calling---*/
const product = {
    id: cuid(),
    name: "iphone 14",
    color: "black",
    price: "75000"
}

addProduct(product)


//List all items
const getAllProducts = async () => {
    const response = await documentClient.send(
        new ScanCommand({
            TableName: TableName
        })
    )
    console.log(response)
}

getAllProducts()

//List single product
const getSingleProduct = async (id) => {
    const response = await documentClient.send(
        new GetCommand({
            TableName: TableName,
            Key: {
                id: id
            }
        })
    )
    console.log(response)
}

getSingleProduct('YOUR-Product-id')

//Update item
const updateProduct = async (product) => {
    const id = product.id
    const price = product.price

    const response = await documentClient.send(
        new UpdateCommand({
            TableName: TableName,
            Key: {
                id: id
            },
            UpdateExpression: "set price = :prc",
            ExpressionAttributeValues: {
                "prc": price
            }
        })
    )
    console.log(response)
}

/*---updateProduct function calling---*/
const updatedProd = {
    price: 80000,
    id: 'YOUR-Product-id',
    name: 'iphone 14',
    color: 'blue'
}

updateProduct(updatedProd)

//Delete item
const deleteProduct = async (id) => {
    const response = await documentClient.send(
        new DeleteCommand({
            TableName: TableName,
            Key: {
                id: id
            }
        })
        )
        console.log(response)
}

deleteProduct('YOUR-Product-id')