package edu.kh.fiesta.dm.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.dm.model.dao.DmDAO;
import edu.kh.fiesta.dm.model.vo.ChattingRoom;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class DmServiceImple implements DmService{
	
	@Autowired
	private DmDAO dao;

	// 모달 받는 사람 회원 목록 비동기 조회
	@Override
	public List<Member> selectMember(String memberNickname) {
		return dao.selectMember(memberNickname);
	}

	@Override
	public int checkChattingNo(Map<String, Integer> map) {
		return dao.checkChattingNo(map);
	}

	@Override
	public int createChattingRoom(Map<String, Integer> map) {
		return dao.createChattingRoom(map);
	}

	@Override
	public List<ChattingRoom> selectRoomList(int memberNo) {
		return dao.selectRoomList(memberNo);
	}

	
}
