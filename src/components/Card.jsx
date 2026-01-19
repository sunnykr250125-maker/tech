import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

// export default function BlogCard({blogs}) {
//   return (
//     <Card sx={{ 
//       maxWidth: 345 ,
//       height:"100%",
//       display:"flex",
//       flexDirection:"column",
//       justifyContent:"space-between"

//     }}  >
//       <CardActionArea sx={{ flexGrow: 1 }}>
//         <CardMedia
        
//           component="img"
//           height="160"
//           image={blogs.image}
//           alt={blogs.title}
//         />
//         <CardContent style={{flexGrow:"1"}}>
//           <Typography gutterBottom variant="h5" component="div"
//           sx={{
//               display: '-webkit-box',
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: 'vertical',
//               overflow: 'hidden'
//                     }}          >
//             {blogs.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary"
//           sx={{
//               display: '-webkit-box',
//               WebkitLineClamp: 3,
//               WebkitBoxOrient: 'vertical',
//               overflow: 'hidden'}}>
//               {blogs.description}
            
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions sx={{ mt: 'auto' }}>
//         <Button size="small" color="primary" >
//           blog
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

export default function BlogCard({ blogs }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minBlockSize: 400,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "stretch",
        p:0
      }}
    >
      <CardActionArea sx={{ flexGrow: 1,p:0 }}>
        
        <CardMedia
          component="img"
          height="160"
          image={blogs.image}
          alt={blogs.title}
          sx={{ objectFit: 'cover' ,display:"block"}}
          
        />

        <CardContent sx={{ flexGrow: 1 }}>
          
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {blogs.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {blogs.description}
          </Typography>

        </CardContent>
      </CardActionArea>

      <CardActions sx={{ mt: 'auto' }}>
        <a href={blogs.link} target="_blank"><Button size="small">Blog</Button></a>
      </CardActions>
    </Card>
  );
}

