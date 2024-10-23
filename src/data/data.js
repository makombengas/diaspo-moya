export const nav =[
    {
        id:0,
        title:"accueil",
        link:"/"
    },
    {
        id:1,
        title:"qui sommes-nous",
        link:"/about-us",
        navArray: [
            {
                id:1,
                title:"Devenir membre",
                link:"/become-a-member"
            
            }
        ]
        
    },
    {
        id:2,
        title:"Histoire de moya",
        link:"/story-of-moya",
        navArray: [
            {
                id:1,
                title:"Présentation",
                link:"/presentation"
            
            }
        ]
     
    },
    {
        id:3,
        title:"Nos projets",
        link:"/our-projets",
       
        navArray: [
            {
                id:1,
                title:"",
                link:""
            
            }
        ]
    },
    {
        id:4,
        title:"Nous contacter",
        link:"/contact-us"
  
    },
    {
        id:5,
        title:"Faire un don",
        link:"/donate"
  
    }
]

export const carousel =[
    {
        id:0,
        title:"Qui sommes nous",
        subtitle:"L'association des fils et filles du village Moya",
        link:"/about-us",
        btn: "En savoir plus",	
        image:"/images/carousel-1.jpg"    
    },
    {
        id:1,
        title:"Nos projets",
        subtitle:"Réhabilitation du centre de santé de Moya",
        link:"/our-projets",
        btn: "Lire la suite",
        image:"/images/carousel-2.jpg"    
    },
    {
        id:2,
        title:"Histoire de Moya",
        subtitle:"MOYA une immigration seculaire ",
        link:"/history-of-moya",
        btn: "En savoir plus",
        image:"/images/carousel-3.jpg"
    },
    {
        id:3,
        title:"Notre objectif",
        subtitle:"faire de moya le carrefour du nord-makombe",
        link:"/donate",
        btn: "Faire un don",
        image:"/images/carousel-4.jpg"    
    }
]