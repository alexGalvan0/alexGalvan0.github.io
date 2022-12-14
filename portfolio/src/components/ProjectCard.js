import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard({
  imagePath,
  title,
  description,
  repoLink,
  liveDemo,
}) {
  return (
    <Card sx={{ width: 250 }} className="mb-5">
      <CardMedia component="img" height="140" image={imagePath} alt="Card" id="projects" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a target="_blank" href={repoLink}>
            Repo
          </a>
        </Button>
        <Button size="small">
          <a target="_blank" href={liveDemo}>
            Live Demo
          </a>
        </Button>
      </CardActions>
      <a href={liveDemo}></a>
    </Card>
  );
}
