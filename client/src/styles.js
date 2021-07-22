import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3f51b5',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'Courier New',
    marginLeft:'10px'
    
  },
  image: {
    marginLeft: '15px',
  },
[theme.breakpoints.down('sm')] : {
  mainContainer : {
    flexDirection : 'column-reverse'
  }
}
 
}));