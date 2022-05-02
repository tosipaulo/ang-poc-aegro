interface Production {
    _id?: string;
    weight?: number;
    totalPlants?: number;
    totalPorPlants?: number;
}

export interface ChunkModel {
    _id?: string;
    name?: string;
    size?: number;
    productions?: Production[];
    farmId?: string;
}

export interface FarmModel {
    _id?: string;
    name?: string;
    chunks?: ChunkModel[];
}