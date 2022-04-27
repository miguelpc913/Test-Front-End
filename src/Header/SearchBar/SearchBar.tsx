import style from './SearchBar.module.css';
import { ReactComponent as SearchSvg } from '../../assets/search.svg'

function SearchBar() {
    return (
        <div className={style.searchBarWrapper}>
            <form className={style.searchBarForm} action="/search" method="get" role="search">
                <input className={style.searchBarInput} type="search" name="q" placeholder="¿Que estas buscando?"></input>
                <button type="submit" className={style.searchBarButton} aria-label="Submit">
                    <SearchSvg></SearchSvg>
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
