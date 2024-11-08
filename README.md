# TicketHub Full-Stack

A React app to discover festivals and events that you want to attend anywhere around the world. This app acts as an alternative to TicketMaster where users can sign up and login to purchase tickets.

## Tech Stack
- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **PocketBase**: An open-source backend that includes a database, authentication, and real-time API capabilities.
- **DiscoveryAPI**: Ticketmaster's API for accessing event data worldwide.

## PocketBase
PocketBase serves as the backend for the TicketHub project, providing a secure and scalable database solution. It handles user authentication, stores event data, and manages user profiles. PocketBase's real-time API capabilities ensure that users receive the most up-to-date information about events and ticket availability.

## Features
- **User Authentication**: Sign up and login functionality for users to manage their accounts.
- **Event Discovery**: Browse and search for events happening around the world.
- **Ticket Purchase**: Users can purchase tickets securely through the app.
- **Responsive Design**: Optimized for various devices and screen sizes.

## Installation

### Prerequisites
- Node.js and npm installed on your machine
- Git installed on your machine

### Cloning the Repository
1. Open your terminal.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:
    ```bash
    git clone <Http Link.git>
    ```

### Setting Up the Project
1. Navigate to the project directory:
    ```bash
    cd tickethub
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

### Setting Up PocketBase
1. Download and install PocketBase from [PocketBase Documentation](https://pocketbase.io/docs/).
2. Start the PocketBase server:
    ```bash
    ./pocketbase serve
    ```
3. Configure the PocketBase settings as required in your project.

### Running the Project
1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to:
    ```bash
    http://localhost:3000
    ```

## Usage
1. Sign up or login to access the full features of the app.
2. Browse and search for events you are interested in.
3. Purchase tickets through the secure payment gateway.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a Pull Request.


## Acknowledgments
- Thanks to [Ticketmaster](https://developer.ticketmaster.com/) for providing the DiscoveryAPI.
- Thanks to [PocketBase](https://pocketbase.io/) for the backend support.

