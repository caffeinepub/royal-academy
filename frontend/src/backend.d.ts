import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AcademyData {
    tagline: string;
    name: string;
    description: string;
    programs: Array<Program>;
    contactEmail: string;
}
export interface Program {
    title: string;
    description: string;
    category: string;
}
export interface backendInterface {
    getAcademyData(): Promise<AcademyData>;
    getAllPrograms(): Promise<Array<Program>>;
    getProgramsByCategory(category: string): Promise<Array<Program>>;
}
