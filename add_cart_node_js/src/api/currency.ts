import express, {NextFunction, Request,Response} from 'express';
const router = express.Router();

router.get('/', (request:Request,response:Response,next:NextFunction) => {

    try{
        return response.status(200).send(
            {
                productData:[
                    {
                        id:1,
                        //img: img1,
                        title: 'Orange',
                        desc: '',
                        price: 50,
                    },
                    {
                        id:2,
                        //img: img2,
                        title: 'Apple',
                        desc: '',
                        price: 70,
                    },
                    {
                        id:3,
                        //img: img3,
                        title: 'Juicy Grapes',
                        desc: '',
                        price: 46,
                    },
                   {
                        id:4,
                       // img: img4,
                        title: 'Lemon',
                        desc: '',
                        price: 30,
                    },
                    /*{
                        id:5,
                        img: img5,
                        title: 'Mango',
                        desc: '',
                        price: 90,
                    },
                    {
                        id:6,
                        img: img6,
                        title: 'Banana',
                        desc: '',
                        price: 25,
                    },*/
                ],
            }
        )
    }catch(error){
      return response.status(500).send(`Somthing went wrong...`);
    //  next(error)
    }
   
})


module.exports = router;