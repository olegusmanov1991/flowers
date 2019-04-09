export default (theme: Object): Object => ({
  root: {
    width: '100%',
    height: '40px',
    padding: '20px 0',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
  },
  city: {
    fontSize: '13px',
  },
  email: {
    fontSize: '11px',
    fontFamily: 'calibri,sans-serif',
  },
  company: {
    fontSize: '20px',
  },
  slogan: {
    fontSize: '16px',
  },
  phone: {
    fontSize: '22px',
  },
  call: {
    lineHeight: '24px',
    padding: '0 10px',
    color: '#fff',
    width: '180px',
    maxWidth: '250px',
    minWidth: '130px',
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '14px',
    borderRadius: '1.5em',
    backgroundColor: '#009708',
  },
});
