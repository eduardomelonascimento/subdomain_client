# SubdomainGetter

This project is a React client that communicates with the SubdomainGetter API to manage subdomains.

## Screens

The project has three screens:

### Login

It has a form where the user must enter their name and password to log in.

### Domain list

Page that lists all domains that the user has registered. It also has an input where the user can search for other domains.

### Subdomain list

Page where the user can see all subdomains of a domain that he registered.

## API

To make requests, the frontend communicates with my api which can be found [here](https://github.com/eduardomelonascimento/subdomain_api).

## How to clone, install and run the project

To clone and install the project, run the following commands:

```sh
git clone https://github.com/eduardomelonascimento/subdomain_client.git
cd subdomain_client
npm install
```

```sh
To run the project, run:

npm run dev
```

### Dependencies
Here is a list of dependencies used in the project:

- dotenv: ^16.0.3
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.10.0
