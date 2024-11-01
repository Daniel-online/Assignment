import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

const Charts = ({location}) => {
  return (
    <div>
      <h1>{countryCode}</h1>
      <div>
        <Bar></Bar>
      </div>
    </div>
  )
}
Charts.propTypes={
    location:PropTypes.string,
}
export default Charts
