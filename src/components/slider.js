import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import img5 from '../images/image5.jpg';
import img6 from '../images/image6.jpg';
import img7 from '../images/image7.jpg';
import img8 from '../images/image8.jpg';
import img9 from '../images/image9.jpg';
import img10 from '../images/image10.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


  // The example data is structured as follows:
 
  // import image from 'path/to/image.jpg';
  // [etc...]
 
  const tileData = [
    {
      img: img1,
      title: 'Image',
      author: 'author',
    },
   
    {
      img: img2,
      title: 'Image',
      author: 'author',
    },
   
    {
      img: img3,
      title: 'Image',
      author: 'author',
    },
    {
      img: img4,
      title: 'Image',
      author: 'author',
    },
    {
      img: img5,
      title: 'Image',
      author: 'author',
    },
    {
      img: img6,
      title: 'Image',
      author: 'author',
    },
    {
      img: img7,
      title: 'Image',
      author: 'author',
    },
    {
      img: img8,
      title: 'Image',
      author: 'author',
    },
    {
      img: img9,
      title: 'Image',
      author: 'author',
    },
    {
      img: img10,
      title: 'Image',
      author: 'author',
    },
   
  ];
 
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
