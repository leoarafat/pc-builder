### Project URL: https://pc-builder-eight.vercel.app

# Build Your PC Project

Welcome to the Build Your PC project! This is a Next.js and Redux-based web application that allows users to build their custom PCs by selecting products from various categories. Below, we'll outline the key features and functionalities of the project to help you get started.

## Introduction

Build Your PC is a web application designed to help users create their custom PCs by selecting products from various categories. The application is built using Next.js for server-side rendering and Redux for state management, providing a seamless and interactive user experience.

## Getting Started

## Features

## Homepage

The homepage features a banner displaying some products along with a "Details" button. Clicking on the "Details" button allows users to view the product details on a separate page.

## Product Details

Clicking on the "Details" button of a product displays a page with comprehensive information about the selected product, including specifications, pricing, and more.

## Category Navigation

The application provides various categories under the banner and product sections. By clicking on a category, users can explore the products available in that category and view their details.

## Protected Route - PC Builder

The "PC Builder" is a protected route that requires user authentication. To access this route, users must log in using their credentials. This route allows users to build their custom PCs step by step.

## Building Your PC

Within the "PC Builder" route, users can see the categories required to build a complete PC. Clicking on the "Choose" button next to each category takes them to the category route, where they can view the products available in that category.

## Ordering Your PC

In the "PC Builder" route, users can add products from various categories to their PC build. Once they've selected products from all the necessary categories, the "Complete to build" button becomes visible. Clicking on this button orders the products and displays a success message.

## Dependencies

The Build Your PC project utilizes the following key dependencies:

Next.js: For server-side rendering and fast, client-side navigation.
Redux: For managing the application's state and handling complex data flows.
React Redux: To connect React components with the Redux store.
Axios: For making API requests to fetch product information.
React Router: For handling client-side routing within the application.
... (Add any other important dependencies used in the project)

## How to Run

To run the Build Your PC project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project's root directory using the command line or terminal.
3. Install the required dependencies using `npm install`.
4. Start the development server with `npm run dev`.
5. Open your web browser and visit `http://localhost:3000` to access the application.

## Contributing

We welcome contributions to the Build Your PC project! If you find any issues, have suggestions for improvements, or want to add new features, please feel free to submit a pull request. Before contributing, please review the CONTRIBUTING.md file for guidelines.

## License

The Build Your PC project is open-source and licensed under the MIT License. You are free to use, modify, and distribute the code according to the terms of the MIT License.

Thank you for using Build Your PC! We hope you enjoy building your custom PC with our application. If you have any questions or need support, please feel free to reach out to us. Happy PC building!
