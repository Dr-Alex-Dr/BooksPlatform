import { Books } from "../data/books"

export default function handler(req, res) {
    const { pid } = req.query; // id категории

    if (req.method === 'GET') {
      Books.forEach(item => {
        console.log(item, pid);
      });
    }
        
    

    
    
  }