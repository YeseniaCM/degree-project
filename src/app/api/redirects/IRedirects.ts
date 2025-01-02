import { ObjectId } from "mongodb";

// Typ för dokument i databasen
export interface IRedirects {
    _id: ObjectId;
    sourceUrl: string;
    destinationUrl: string;
    httpStatusCode: number;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
  }
  
  // Typ för API-responsen
export interface IRedirectsResponse {
    _id: string; // Konverterad till string för klienten
    sourceUrl: string;
    destinationUrl: string;
    httpStatusCode: number;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
  }