package edu.kh.fiesta.member.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class MemberDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 로그인 DAO
	 * @param memberEmail
	 * @return loginMember
	 */
	public Member login(String memberEmail) {
		return sqlSession.selectOne("memberMapper.login", memberEmail);
	}

	
	/** 회원가입 DAO
	 * @param inputMember
	 * @return reult
	 */
	public int signUp(Member inputMember) {
		int result = sqlSession.insert("memberMapper.signUp", inputMember);
		
		if(result > 0) {
			result = sqlSession.insert("memberMapper.userPubPriFl", inputMember);
		}
		
		return result; 
	}
	
	
	
	/** 회원가입_이메일 중복 체크 DAO
	 * @param memberEmail
	 * @return result
	 */
	public int emailDupCheck(String memberEmail) {
		return sqlSession.selectOne("memberMapper.emailDupCheck", memberEmail);
	}

	

	/** 회원가입_닉네임 중복 체크 서비스 DAO
	 * @param memberNickname
	 * @return result
	 */
	public int nicknameDupCheck(String memberNickname) {
		return sqlSession.selectOne("memberMapper.nicknameDupCheck", memberNickname);
	}


	/** 계정찾기_ 비밀번호 재설정 DAO
	 * @param memberEmail
	 * @param memberPw
	 * @return result
	 */
	public int updatePw(Member member) {
		return sqlSession.update("memberMapper.updatePw", member);
	}


	public int selectMemberNo(String memberEmail) {
		return sqlSession.selectOne("memberMapper.selectMemberNo", memberEmail);
	}


	public int followMyself(int memberNo) {
		return sqlSession.insert("memberMapper.followMyself", memberNo);
	}


	
}
