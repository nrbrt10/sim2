export interface MobDTO {
    id: string;
    name: string;
    player_id: string;
    settlement_id: string | null;
    x: number;
    y: number;
    behaviors: string | null; 
}