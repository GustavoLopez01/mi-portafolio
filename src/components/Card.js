import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const CardElement = ({ name, url }) => {
  return (
    <Card className="w-96 mt-10 m-4 shadow-xl">
      <CardHeader floated={false} className="h-52">
        <img
          src={url}
          alt=""
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Button fullWidth color="blue-gray">Mas información</Button>
      </CardFooter>
    </Card>
  );
};

export { CardElement };
