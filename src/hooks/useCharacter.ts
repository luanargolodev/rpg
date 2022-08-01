import { useState } from 'react';
import { CharacterSides } from '../types/CharacterSides';
import { mapSpots } from '../data/mapSpots';
 
export const useCharacter = (propName: string) => {
  const [name, setName] = useState(propName);
  const [pos, setPos] = useState({ x: 3, y: 5 });
  const [side, setSide] = useState<CharacterSides>('down');
  
  const moveUp = () => {
    setPos(pos => ({
      x: pos.x,
      y: canMove(pos.y - 1, pos.x) ? pos.y - 1 : pos.y,
    }));
    setSide('up');
  }

  const moveDown = () => {
    setPos(pos => ({
      x: pos.x,
      y: canMove(pos.y + 1, pos.x) ? pos.y + 1 : pos.y,
    }));
    setSide('down');
  }

  const moveLeft = () => {
    setPos(pos => ({
      x: canMove(pos.y, pos.x - 1) ? pos.x - 1 : pos.x,
      y: pos.y
    }));
    setSide('left');
  }

  const moveRight = () => {
    setPos(pos => ({
      x: canMove(pos.y, pos.x + 1) ? pos.x + 1 : pos.x,
      y: pos.y
    }));
    setSide('right');
  }

  const canMove = (x: number, y: number) => {
    if(x < 0 || y < 0) return false;

    if(x >= mapSpots.length || y >= mapSpots[0].length) {
      return false;
    }

    return true;
  }

  return {
    name,
    x: pos.x,
    y: pos.y,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    side
  };
}