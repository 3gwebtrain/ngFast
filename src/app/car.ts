export class Car {
	constructor(private id:string, private name:string,private year:number){};

	public get ID() : string{
		return this.id;
	}

	public get NAME() : string{
		return this.name;
	}

	public get YEAR() : number{
		return this.year;
	}
}