export class TypesDto {
  type:{
    name : string;
    url : string;
  }

  constructor(type: {name: string, url: string}) {
    this.type = type;
  }
}

