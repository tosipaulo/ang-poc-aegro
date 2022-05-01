interface Production {
    weight?: number;
    totalPlants?: number;
    totalPorPlants?: number;
}

interface Chunk {
    name: string;
    size: number;
    productions: Production[];
}

export interface FarmModel {
    name?: string;
    chunks: Chunk[];
}