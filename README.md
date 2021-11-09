## Food app
A Food Ordering web application.

### Link to the web app 
https://develop.d37lta4ehey90q.amplifyapp.com/
### Description
A food ordering web  application that allows
    
###### An admin to

```
- Create Users
- Assign roles to users
- Create food menus
- View all orders made
- View all users
```

###### A food attendant to

```
- Get all pending orders and update an order status
```

###### A normal user to

```
- Fetch all menu items
- Create an order
- View order history
```

### Project setup
-   Clone the foodapp repo and cd into it:

    ```
    git clone https://github.com/salma-nyagaka/foodapp-fe.git
    ```

- Run the following command  to install the dependancies needed for the project

    ```
    npm install
    ```

- Run the following command  to start the server

    ```
    npm start
    ```

#### Instructions for logging in

- Log in as an admin to add users, get all users, get a single user, create a menu, 
update a menu item, get all users

    ```
    "email": "admin@gmail.com",
    "password": "admin123"
    ```

- Log in as a food attendant to get all orders and update order status

    ```
    "email": "attendant@gmail.com",
    "password": "attendant123"
    ```

- Log in as a normal user to view past orders

    ```
    "email": "user@gmail.com",
    "password": "user12345"
    ```
