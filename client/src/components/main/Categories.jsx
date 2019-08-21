import React from 'react'
import './mainStyle.css'
import {fetchPet} from '../../services/pet';
import {withRouter} from 'react-router-dom'
import ReactPlayer from 'react-player'


class Categories extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.pets);

        // this.state = {
        //     pets: {},
        // };
    }

    componentDidMount = async () => {
        // const pets = await fetchPet();
        // const cats = pets.cats;
        // const dogs = pets.dogs;
        // this.setState({
        //   cats: cats,
        //   dogs: dogs
        // })


    };

    updatePets = (parentState) => {
        // if (parentState) {
        //     this.setState(() => ({
        //         pets: parentState.pets
        //     }));
        // }
        //
        // return this.state;
    };

    handleAddRedirect = async (e) => {
        e.preventDefault();
        this.props.history.push('/addPet')
    };

    handleSeeMoreRedirect = async (e) => {
        e.preventDefault();
        this.props.history.push('/seeMore')
    };

    displayVideos = () => {
        return (
            <div>
                {
                    this.props.pets_form.is_cat === true ? this.displayCats() : this.displayDogs()
                }
            </div>
        )
    };

    displayCats = () => {
        return this.props.pets.cats.slice(0, 5).map(cat => {
            return (
                <div key={cat.id}>
                    <ReactPlayer className="Video" url={cat.video_url}/>
                    <p>{cat.title}</p>
                </div>
            );
        });
    };

    displayDogs = () => {
        return this.props.pets.dogs.slice(0, 5).map(dog => {
            return (
                <div key={dog.id}>
                    <ReactPlayer url={dog.video_url}/>
                    {dog.title}
                </div>
            );
        })
    };

    displayCategoryView = () => {
        // console.log(this.props.pets);
        const videosView = Object.keys(this.props.pets).length > 0 ? this.displayVideos() : null;
        // console.log(videosView);
        return (
            <div>
                <h1>HELOOOOOOOOOOOOO</h1>
                <button onClick={this.props.displayCat}> Cats</button>
                <button onClick={this.props.displayDog}>Dogs</button>
                <button onClick={this.handleAddRedirect}>Add Video</button>
                <button onClick={this.handleSeeMoreRedirect}>See more</button>
                {videosView}
            </div>
        )
    };

    render() {
        return this.displayCategoryView();
    }
}

export default withRouter(Categories);
