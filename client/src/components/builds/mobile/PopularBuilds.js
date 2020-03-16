import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getBuilds, clearBuilds } from '../../../actions/actionCreators';
import BuildItem from './BuildItem';
import Pagination from '@material-ui/lab/Pagination';

class PopularBuilds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      rowsPerPage: 5,
      totalPageCount: null
    };
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    this.props.clearBuilds();
    this.props.getBuilds(
      this.props.filter,
      this.props.sort,
      0,
      this.state.rowsPerPage
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.sort !== prevProps.sort ||
      this.props.filter !== prevProps.filter
    ) {
      this.props.getBuilds(this.props.filter, this.props.sort, 0, 5);
    }
    if (this.props.totalBuildCount !== prevProps.totalBuildCount) {
      this.setState({
        totalPageCount:
          Math.ceil(this.props.totalBuildCount / this.state.rowsPerPage) || 1
      });
    }
  }

  componentWillUnmount() {
    this.props.clearBuilds();
  }

  handleChangePage = (event, newPage) => {
    const { totalBuildCount, filter, sort } = this.props;
    let limit = Math.min(5, totalBuildCount);
    let skip = (newPage - 1) * this.state.rowsPerPage;

    this.props.clearBuilds();

    this.setState({ page: newPage });

    this.props.getBuilds(filter, sort, skip, limit);
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
    this.setState({ page: 1 });
  };

  render() {
    const { page, totalPageCount } = this.state;
    return (
      <Fragment>
        {this.props.builds.map(build => (
          <BuildItem key={build._id} build={build} />
        ))}

        {totalPageCount ? (
          <Pagination
            page={page}
            onChange={this.handleChangePage}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
              marginBottom: 70
            }}
            count={totalPageCount}
            color="primary"
          />
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  builds: state.grid.builds,
  sort: state.grid.sort,
  filter: state.grid.filter,
  totalBuildCount: state.grid.totalBuildCount
});

export default connect(mapStateToProps, {
  getBuilds,
  clearBuilds
})(PopularBuilds);
