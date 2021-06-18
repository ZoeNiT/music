import { Fragment, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import NavBar from './components/NavBar';
import PlayBar from './components/PlayBar';
import Footer from './components/Footer';

import Home from './pages/Home'
import Load from './components/Load';

const Rank = lazy(() => import('./pages/Rank'))
const PlayList = lazy(() => import('./pages/PlayList'))
const SongDetail = lazy(() => import('./pages/PlayListDetail'))
const AlbumDetail = lazy(() => import('./pages/AlbumDetail'))
const MvList = lazy(() => import('./pages/MvList'))
const Login = lazy(() => import('./pages/Login'))
const Search = lazy(() => import('./pages/Search'))

function App() {


  return (
    <Fragment>
      <NavBar />
      <PlayBar />
      <Suspense fallback={<Load />}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/rank" component={Rank} />
          <Route exact path="/playlist" component={PlayList} />
          <Route exact path="/playlist/song/:id" component={SongDetail} />
          <Route exact path="/playlist/album/:id" component={AlbumDetail} />
          <Route exact path="/mvlist" component={MvList} />
          <Route exact path="/login" component={Login} />
          <Route path="/search" component={Search} />
          <Redirect to="/home" />
        </Switch>
      </Suspense>
      <Footer />
    </Fragment>
  );
}

export default App;
