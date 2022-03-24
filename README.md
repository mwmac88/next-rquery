<div id="top"></div>

<h3 align="center">Quidbet</h3>

  <p align="center">
    Quidbet - The Only Quidditch Betting Platform
    <br />
    <a href="https://quidbet.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/mwmac88/quidbet/issues">Report Bug</a>
    ·
    <a href="https://github.com/mwmac88/quidbet/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was created to explore the [react-query](https://react-query.tanstack.com) library within the [Next.js](https://nextjs.org/) framework. 

The aim of this project was to gain an understanding of how react-query can be employed to assist with the seperation of concerns between local client state and server state. A further aim was to understand the performance benefits gained by utilising this library.

The application consists of fictional Quidditch teams partaking in fictional events with the ability to place bets on each outcome which are subsequently added to a betslip.


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com)
* [react-query](https://react-query.tanstack.com)
* [jotai](https://jotai.org)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mwmac88/quidbet.git
   ```
3. Install yarn packages
   ```sh
   yarn install
   ```
4. Run the dev experience
   ```sh
   yarn dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Things to enjoy

* The odds will update every 15 seconds to demonstrate how fast the queries are and the synchronisation ability between the Betslip and the event cards
* See how quick navigation is after initial render by employing react-query's `prefetchQuery`


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Betslip
    - [ ] Place bet
- [ ] All-The-Unit-Tests
- [ ] Apollo GraphQL server
    

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>
