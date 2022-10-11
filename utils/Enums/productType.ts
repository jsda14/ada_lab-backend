import { Constants } from "../Constants/constants";

export class ProductTypeEnum {

    public static readonly pysicsBased = 1;
    public static readonly machineLearning = 2;

    public static readonly oneWeek = 1;
    public static readonly threeWeek = 2;
    public static readonly eightWeek = 3;

    //Filters
     public static readonly operations = 4
     public static readonly finance = 5
     public static readonly marketing = 6
     public static readonly rd = 7

     //Input Query

     public static readonly background = 8
     public static readonly challenge = 9
     public static readonly dataRequeriments = 10
     public static readonly expectedOutcome = 11


    public static getProductsType(){
        return [
            {
                ai_modeling: [
                    { id: this.pysicsBased, value: Constants.pysics },
                    { id: this.machineLearning, value: Constants.machineLearning}
                ],
                development_time: [
                    {id: this.oneWeek, value: Constants.oneWeek},
                    {id: this.threeWeek, value: Constants.threeWeek},
                    {id: this.eightWeek, value: Constants.eightWeek}
                ],
                filter:[
                    {id: this.operations, value: Constants.operations},
                    {id: this.finance, value: Constants.finance},
                    {id: this.marketing, value: Constants.marketing},
                    {id: this.rd, value: Constants.rd}
                ],
                input_query:[
                    {id: this.background, value: Constants.background},
                    {id: this.challenge, value: Constants.challenge},
                    {id: this.dataRequeriments, value: Constants.dataRequeriments},
                    {id: this.expectedOutcome, value: Constants.expectedOutcome}
                ],
            }
        ]
    }

}

