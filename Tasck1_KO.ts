interface ICompany{
    nameCompany: string;
    profit: number;
    hproductionVolume: number;
    laborForse: number;
    location?: string;
}

const myCompany: ICompany = {
    nameCompany: 'Comp1',
    profit: 50000,
    hproductionVolume: 500000,
    laborForse: 4000
}

interface Subsidiary extends ICompany {
    nameSubsidiary: string;
    city: string;
}

const mySubsidiary: Subsidiary = {
    nameCompany: 'Comp1',
    nameSubsidiary: 'Sub1',
    profit: 30000,
    hproductionVolume: 300000,
    laborForse: 2000,
    city: 'Kyiv'
}

class product1{
    private article: number;
    public productName: string;
    
    protected art(): void {
        this.article = 3498;
    }
}

class Product extends product1 implements Subsidiary {
    nameCompany: string;
    nameSubsidiary: string;
    profit: number;
    hproductionVolume: number;
    laborForse: number;
    location?: string;
    city: string;

    AnotherArt(): void {
        this.art();
    }
}


type Profitability = {
    Profit: boolean,
    NCompany: string
}

function myFunc(paams: Profitability) {

}

myFunc({Profit: true, NCompany: "Comp2"})

let ProductClass: string = "steel";
ProductClass = 'tin';


const Prof = <T> (ValProf: T): T=> {
    return ValProf
}

const Prof1 = Prof (1)



enum SubsidiaryOl{
    Kyiv="Subsidiary1",
    Vinnytsia="Subsidiary2",
}

let mySub: SubsidiaryOl = SubsidiaryOl.Kyiv;

console.log(mySub);

var ProductTuple = ["Prod1","Prod2","Prod3",3];


