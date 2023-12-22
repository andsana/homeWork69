import React from 'react';
import {useParams} from 'react-router-dom';
import {isAutocompleteVisibleSelector, searchShowsSelector, selectFetchShowsLoading} from '../../store/showsSlice';
import {ShowData} from '../../types';
import {useAppSelector} from '../../app/hooks';
import Spinner from '../../components/Spinner/Spinner';
import SearchInput from '../../components/SearchInput/SearchInput';
import Autocomplete from '../../components/Autocomplate/Autocomplete';

const ShowById: React.FC = () => {
    const {showId} = useParams();
    const fetchLoading = useAppSelector(selectFetchShowsLoading);
    const fetchShows = useAppSelector(searchShowsSelector);
    const isAutocompleteVisible = useAppSelector(isAutocompleteVisibleSelector);
    const selectedShow = fetchShows.find((show: ShowData) => show.show.id.toString() === showId);

    let show;

    if (selectedShow) {
        const {name, image, premiered, language} = selectedShow?.show || {};
        const imageUrl = image?.original || '';
        show = (
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imageUrl} className="img-fluid rounded-start" alt="pic"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Premiered: {premiered}</p>
                            <p className="card-text">Language: {language}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <SearchInput/>
            <Autocomplete/>
            {!isAutocompleteVisible && (fetchLoading ? <Spinner/> : (selectedShow && show))}
        </div>
    );
};

export default ShowById;

