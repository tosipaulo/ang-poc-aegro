interface Production {
    _id?: string;
    weight?: number;
    totalPlants?: number;
    totalPorPlants?: number;
}

interface Chunk {
    _id?: string;
    name?: string;
    size?: number;
    productions?: Production[];
}

export interface FarmModel {
    _id?: string;
    name?: string;
    chunks?: Chunk[];
}