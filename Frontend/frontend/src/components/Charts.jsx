import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const Charts = ({ populationData }) => {
    const labels = populationData.map(count => count.year);
    const values = populationData.map(count => count.value);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Population Over Years',
                data: values,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Population Chart</h2>
            <Line data={data} options={options} />
        </div>
    );
};
Charts.propTypes = {
    populationData: PropTypes.arrayOf(
        PropTypes.shape({
            year: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Charts;