import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUrl } from '../../actions/actionCreators';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './desktop.css';

export default function ShareButton() {
  const dispatch = useDispatch();
  const url = useSelector(state => state.grid.url);
  const selectedCellsById = useSelector(state => state.grid.selectedCellsById);
  const remainingEnergy = useSelector(state => state.grid.remainingEnergy);
  const orbSpent = useSelector(state => state.grid.orbSpent);
  const selectedPokemon = useSelector(state => state.pokemon.selectedPokemon);
  // const selectedCellsById = useSelector(state => state.grid.selectedCellsById);
  const darkMode = useSelector(state => state.darkMode.mode);

  // let gridUrlArray =
  //   !Object.keys(selectedCellsById).length === 0
  //     ? 'grid=' +
  //       Object.keys(selectedCellsById)
  //         .map(e => {
  //           return e.slice(-2);
  //         })
  //         .join('%2C')
  //     : '';
  // console.log(gridUrlArray);
  // let url = `https://pokemon-masters-stuff.github.io/?e=${remainingEnergy}${gridUrlArray}&o=${orbSpent}&p=${selectedPokemon}`;
  // // if (url !== window.location.href) {
  // //   dispatch(updateUrl(window.location.href.replace(/,/g, '%2C')));
  // // }
  console.log('url', url);

  // const handleClick = () => {
  //   let gridUrlArray = selectedCellsById
  //     ? '&grid=' +
  //       Object.keys(selectedCellsById)
  //         .map(e => {
  //           return e.slice(-2);
  //         })
  //         .join('%2C')
  //     : null;
  //   console.log('gridUrlArray', gridUrlArray);
  //   url = `https://pokemon-masters-stuff.github.io/?e=${remainingEnergy}${gridUrlArray}&o=${orbSpent}&p=${selectedPokemon}`;
  //   // if (url !== window.location.href) {
  //   //   dispatch(updateUrl(window.location.href.replace(/,/g, '%2C')));
  //   // }
  //   console.log('url', url);
  // };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-success"
        // onClick={handleClick}
        data-toggle="modal"
        data-target="#shareLinkModal"
        style={{ position: 'relative', zIndex: 999 }}
      >
        Share Link
      </button>

      <div
        className="modal fade"
        id="shareLinkModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className={`modal-content ${
              darkMode ? 'text-white bg-dark' : null
            }`}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Share this link
              </h4>
            </div>
            <div className="modal-body mx-3">
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  value={url}
                  readOnly
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <CopyToClipboard text={url}>
                <button
                  className={`btn btn-default ${
                    darkMode ? 'text-white' : null
                  }`}
                  data-dismiss="modal"
                >
                  Copy to Clipboard
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
