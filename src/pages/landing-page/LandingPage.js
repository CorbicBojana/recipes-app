import React from 'react'
import { connect } from 'react-redux';

import SearchForm from './components/SearchForm';
import Loading from "./components/Loading";
import RecipeContainer from "./components/RecipeContainer";

function LandingPage(props) {
    const { loading } = props;

    return (<>
        <SearchForm />
        {loading ? <Loading /> : <RecipeContainer />}
        </>
    )
}

const mapStateToProps = state => ({
    loading: state.recipes.loading
  });
  
export default connect(mapStateToProps)(LandingPage);