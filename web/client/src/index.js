import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
		/*
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,*/
    Row,
    Col,
	Media,
    /*Jumbotron,*/
    Button,
	Carousel,
	CarouselItem/*,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption*/

} from 'reactstrap';


/* Add Google Analytics */
ReactGA.initialize('UA-119993239-3');

function MyHead(props) {
	return (
		<Helmet>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    		{/*
				manifest.json provides metadata used when your web app is added to the
				homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/ */}

			{/*Not required but set by react */}
			<link rel="shortcut icon" href="/favicon.ico" />
			<link rel="manifest" href="/manifest.json" />

			<title>Witness This Media</title>
			<meta name="description" content="Witness This Media homepage" />
			<meta name="author" content="Donald J. Patterson d_j_p_3@djp3.net" />

			{/* Bootstrap CSS 
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous" />
				shasum -a 384 -b bootstrap.min.css | xxd -r -p | base64
			
			*/}
			<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
			<link rel="stylesheet" type="text/css" href="assets/css/witness.css" />
			{/* Fonts */}
			<link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet" />
			{/* Font awesome */}
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />

			{/* Annoying icon tags */}

			<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
			<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
			<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
			<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
			<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
			<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
			<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
			<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
			<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<meta name="msapplication-TileColor" content="#ffffff"/>
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
			<meta name="theme-color" content="#ffffff"/>

		</Helmet>
	);
}


const items = [
  {
	key: "1",
    caption: (
				<React.Fragment>
					<h4 class="garamond">“What is truth?” <a href="https://www.biblegateway.com/passage/?search=John+18&version=NIV">retorted Pilate</a></h4>
			
				</React.Fragment>
	)
	
  },
  {
	key: "2",
    caption: (
				<React.Fragment>
					<h4 class="garamond">"The eyes of the world are watching now" -<a href="https://youtu.be/luVpsM3YAgw">Biko, Peter Gabriel</a></h4>

			
				</React.Fragment>
	)
  },
  {
	key: "3",
    caption: (
				<React.Fragment>
					<h4 class="garamond">"You can blow out a candle, but you can’t blow out a fire" -<a href="https://youtu.be/luVpsM3YAgw">Biko, Peter Gabriel</a></h4>
				</React.Fragment>
	)
  }
];		

const routeNavItemsHome = () => (
	<Nav className="mr-auto" navbar tag="div">
		<NavItem active>
			<NavLink tag={Link} to="/">Home</NavLink>
		</NavItem>
		<NavItem>
			<NavLink tag={Link} to="/credits">Credits</NavLink>
		</NavItem>
	</Nav>
)
const routeNavItemsCredits = () => (
	<Nav className="mr-auto" navbar tag="div">
		<NavItem >
			<NavLink tag={Link} to="/">Home</NavLink>
		</NavItem>
		<NavItem active>
			<NavLink tag={Link} to="/credits">Credits</NavLink>
		</NavItem>
	</Nav>
)

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
			navBarIsOpen: false
        };
	}

	toggleNavbar() {
   		this.setState({
			navBarIsOpen: !this.state.navBarIsOpen
		});
	}

	render(){
		return (
			<Container fluid={true}>
				<Navbar color="dark" dark fixed="top" expand="md">
  	   				<NavbarBrand href="#">Witness</NavbarBrand>
					<NavbarToggler left onClick={this.toggleNavbar} />
					<Collapse isOpen={this.state.navBarIsOpen} navbar>
						<Route exact path="/" component={routeNavItemsHome}/>
						<Route exact path="/credits" component={routeNavItemsCredits}/>
					</Collapse>
					<div class="navbar-nav-scroll">
						<Nav>
							<NavItem>
								<NavLink href="https://www.facebook.com/WitnessThisMedia" className="p-2">
									<Button color="secondary" size="sm"><i class="fab fa-facebook"></i></Button>{' '}
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://twitter.com/WitnessDisMedia" className="p-2">
									<Button color="secondary" size="sm"><i class="fab fa-twitter"></i></Button>{' '}
								</NavLink>
							</NavItem>
						</Nav>
					</div>
				</Navbar>
			</Container>
		)
	}
}

class Splash extends Component{

	render() {
		return (
			<Container fluid={true}>
				<Row className="justify-content-center">
					<Col className="text-center">
   					     <Media object className="img-fluid" src="assets/images/wordmark.png" alt="witness word mark"/>
					</Col>
				</Row>
				<Row className="justify-content-center" style={{paddingTop:65,paddingBottom:65}}>
					<Col className="text-center">
						<Media object className="img-fluid" src="assets/images/eyelogo.png" alt="eye logo"/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="text-center">
						<Media body>
						<Media object src="assets/images/icons/about.png" style={{height:100}} alt="about icon"/>
							<Media heading>
								About
							</Media>
							Witness provides evidence of media tampering
						</Media>
					</Col>
					<Col className="text-center">
						<Media body>
							<Media object src="assets/images/icons/motivation.png" style={{height:100}} alt="motivation icon"/>
							<Media heading>
								Motivation
							</Media>
								It is easy to make fake, but realistic media. For example this video:
							<Media body className="pt-3">
								<iframe title="Obama Deep Fake" width="250" height="*" src="https://www.youtube.com/embed/cQ54GDm1eL0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
							</Media>
						</Media>
					</Col>
					<Col className="text-center">
						<Media body>
							<Media object src="assets/images/icons/blockchain.png" style={{height:100}} alt="blockchain icon"/>
							<Media heading>
								Technology
							</Media>
								Blockchain
						</Media>
					</Col>
				</Row>
			</Container>
		)
	}
}

class Credits extends Component{

	render() {
		return (
			<Container fluid={true}>
				<Row className="justify-content-center">
					<Col className="text-center">
   					     <Media object className="img-fluid" src="assets/images/wordmark.png" alt="witness word mark"/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="text-center">
						<Media heading>
							About
						</Media>
							This project is led by <a href="https://www.djp3.net">Prof. Don Patterson</a> in collaboration with Prof. Bill Tomlinson
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="text-center">
						<Media heading>
							Graphics
						</Media>
							Thanks to the following who have made their work available for our use:
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="text-center">
						<Media body>
							<Media object left src="assets/images/icons/about.png" style={{height:50}} alt="about icon"/>
							by Miguel C Balandrano from the Noun Project
						</Media>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="text-center">
						<Media body>
							<Media object left src="assets/images/icons/motivation.png" style={{height:50}} alt="motivation icon"/>
							by samuel nudds from the Noun Project
						</Media>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="text-center">
						<Media body>
							<Media object left src="assets/images/icons/blockchain.png" style={{height:50}} alt="blockchain icon"/>
								by Ben Davis from the Noun Project
						</Media>
					</Col>
				</Row>
			</Container>
		)
	}
}


class FooterCarousel extends Component {
	constructor(props) {
		super(props);

        this.state = {
    		carouselActiveIndex: 0,
        };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
    }

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.carouselActiveIndex === items.length - 1 ? 0 : this.state.carouselActiveIndex + 1;
		this.setState({ carouselActiveIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const prevIndex = this.state.carouselActiveIndex === 0 ? items.length - 1 : this.state.carouselActiveIndex - 1;
		this.setState({ carouselActiveIndex: prevIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ carouselActiveIndex: newIndex });
	}


	render(){
		const { carouselActiveIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.key}
				>
					{item.caption}
				</CarouselItem>
			);
		});

		return (
			<Container fluid={true}>
				<footer className="footer justify-content-center">
					<div className="container text-center">
						<Carousel
							activeIndex={carouselActiveIndex}
							next={this.next}
							previous={this.previous}
							ride="carousel"
						>
						{slides}
						</Carousel>
					</div>
				</footer>
			</Container>
		)
	}
}



class MyApp extends Component {
	constructor(props) {
		super(props);

        this.state = {
    		foo: 0,
        };

		ReactGA.pageview(window.location.pathname+window.location.search);
    }



		
	render() {
	     return (
			<Router>
				<div>
					<MyHead />

					<NavBar />
				

					<main role="main">
						<Route exact path="/" component={Splash}/>
						<Route exact path="/credits" component={Credits}/>
					
						<FooterCarousel />
					</main>
				</div>
			</Router>
        );
    }
}

ReactDOM.render(
	<MyApp />
	,
	document.getElementById('root')
);

