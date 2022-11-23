package edu.kh.fiesta.main.model.service;

import java.util.List;
import java.util.Map;

import edu.kh.fiesta.main.model.vo.Board;

public interface MainService {



	/** AJAX 팔로잉한 멤버 게시글 조회 서비스
	 * @param selectBoardSql
	 * @return
	 */
	public Map<String, Object> selectBoardList(int memberNo, int cp);

	
	
	/**
	 * 팔로잉 멤버 게시글 조회 서비스
	 * @param memberNo
	 * @return
	 */
	public Map<String, Object> selectBoardList(int memberNo);



 	/** 게시글 좋아요 증가
	 * @param boardNo
	 * @param memberNo
	 * @return result
	 */
	public int boardLikeUp(int boardNo, int memberNo);



	/** 게시글 좋아요 감소
	 * @param boardNo
	 * @param memberNo
	 * @return
	 */
	public int boardLikeDown(int boardNo, int memberNo);

}
