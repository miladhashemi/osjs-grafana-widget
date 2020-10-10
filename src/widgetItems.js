import StatsdWidget from './items/statsd';
import GaugeWidget from './items/gauge';
import statsdImage from '../XY-Chart.png';
import gaugeImage from '../gauge-Chart.png';
const widgetItem = {
  statsd:{
    object: StatsdWidget,
    name: 'STATSD',
    image: statsdImage
  },
  gauge:{
    object: GaugeWidget,
    name: 'GAUGE',
    image: gaugeImage
  }
};
export default widgetItem;
