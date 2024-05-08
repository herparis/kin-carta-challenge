export interface RootContactObject {
  address:       Address;
  birthdate:     Date;
  companyName?:  null | string;
  emailAddress:  string;
  id:            string;
  isFavorite:    boolean;
  largeImageURL: string;
  name:          string;
  phone:         Phone;
  smallImageURL: string;
 }
 
 export interface Address {
  city:    string;
  country: Country;
  state:   string;
  street:  string;
  zipCode: string;
 }
 
 export enum Country {
  Us = "US",
 }
 
 export interface Phone {
  home?:   string;
  mobile?: string;
  work?:   string;
 }

 export const fetchContacts = async (): Promise<RootContactObject[]> => {
  const url = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json'

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(response.statusText)
    return response.json() as Promise<RootContactObject[]>
  } catch (e) {
    throw e
  }
}
